import './Loading.css'

interface LoadingProps {
  concerns: string[]
}

const Loading = ({concerns}: LoadingProps) => {
  return(
    <div className="loading-parent">
      <div className="loading-concerns">
        {concerns.map(concern => <div className="loading-concern" key={concern}>{concern}</div>)}
      </div>
      <div className="loading-details">
        <h3>Hang tight, we're gathering your results.</h3>
        <div>
          <p>Manually digging through a TOS could take hours.</p>
          <p>Lucky for you, your wait time is only: ~{concerns.length * 10}s.</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
