import './ConcernRow.css'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';

interface ConcernRowProps{
  title: string
  rating: number
  icon?: React.ReactNode
}

const ConcernRow = ({title, rating, icon}: ConcernRowProps) => {

  return (
    <div className="concern-row">
      <p className='concern-title'>{title}</p>
      <PriorityHighRoundedIcon color='action'/>
    </div>
  );
};

export default ConcernRow; 
