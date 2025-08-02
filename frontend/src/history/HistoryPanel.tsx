import { useHistory } from '../history/useHistory';
import { MCQChallenge } from '../challenge/MCQChallenge';
export const HistoryPanel = () => {
  const {isLoading,  error, fetchHistory, history} = useHistory();
  if (isLoading) {
    return <div className="loading">Loading history...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={fetchHistory}>Retry</button>
      </div>
    );
  }
  return (
    <div className="history-panel">
      <h2>History</h2>
      {history?.length === 0 ? (
        <p>No challenge history</p>
      ) : (
        <div className="history-list">
          {history?.map((challange:any) => {
            return (
              <MCQChallenge
                challange={challange}
                key={challange?.id}
                showExplanation={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
