
function QueueDisplay({queue, onUpdateStatus, onRemove}) {

    const getStatusColor = (status) => {
        switch (status) {
            case "waiting":
                
                return "var(--warning)";
            case "serving":
                
                return "var(--success)";
            case "completed":
                
                return "var(--info)";
        
            default:
                return "var(--text)";
        }
    }

  return (
    <div className="queue-display">
        <h1>Customer Data</h1>
        {queue.length === 0 ? <p className="empty-queue">No Data</p> : 
        <div className="queue-list">
            {queue.map((customer) => (
                <div className="queue-item" key={customer.id}>

                </div>

            ))}

        </div>
            }

    </div>
  )
}

export default QueueDisplay