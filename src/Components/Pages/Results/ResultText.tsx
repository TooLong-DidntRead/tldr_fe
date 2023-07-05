interface Props {
  title: string;
  content: string;
}

export const ResultText = ({title, content}: Props) => {
  return(
    <div className="results-card-section">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}
