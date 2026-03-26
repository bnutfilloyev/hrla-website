'use client';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import styles from './admin.module.css';
import Link from 'next/link';

const COLUMNS = ['New', 'In Progress', 'Done', 'Rejected'];

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await fetch('/api/leads');
    const data = await res.json();
    setLeads(data);
    setLoading(false);
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    
    const { source, destination, draggableId } = result;
    
    if (source.droppableId === destination.droppableId) return;

    // Optimistic UI update
    const leadId = parseInt(draggableId);
    const newStatus = destination.droppableId;
    
    setLeads(prevLeads => 
      prevLeads.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );

    // Backend update
    await fetch(`/api/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
  };

  const leadsByStatus = COLUMNS.reduce((acc, col) => {
    acc[col] = leads.filter(l => l.status === col);
    return acc;
  }, {});

  if (loading) return <div className={styles.loader}>Loading leads...</div>;

  return (
    <div className={styles.adminPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>HRLA CRM</h1>
          <Link href="/" className={styles.backLink}>← Back to Site</Link>
        </div>
      </header>
      
      <div className={styles.boardContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={styles.board}>
            {COLUMNS.map((columnId) => (
              <div key={columnId} className={styles.columnWrapper}>
                <div className={styles.columnHeader}>
                  <h3>{columnId}</h3>
                  <span className={styles.badge}>{leadsByStatus[columnId]?.length || 0}</span>
                </div>
                
                <Droppable droppableId={columnId}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`${styles.columnBody} ${snapshot.isDraggingOver ? styles.draggingOver : ''}`}
                    >
                      {leadsByStatus[columnId]?.map((lead, index) => (
                        <Draggable key={lead.id} draggableId={lead.id.toString()} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`${styles.card} ${snapshot.isDragging ? styles.dragging : ''}`}
                            >
                              <h4>{lead.name}</h4>
                              <p>📞 {lead.phone}</p>
                              {lead.company && <p>🏢 {lead.company}</p>}
                              <span className={styles.date}>
                                {new Date(lead.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
