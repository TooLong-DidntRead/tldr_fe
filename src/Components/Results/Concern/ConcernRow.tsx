import './ConcernRow.css'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';

interface ConcernRowProps {
  id: number
  title: string
  rating: number
  icon?: React.ReactNode
  selectConcern: (id: number) => void
}

const ConcernRow = ({id, title, rating, icon, selectConcern}: ConcernRowProps) => {

  return (
    <div className='concern-row' onClick={() => selectConcern(id)}>
      <p className='concern-title'>{title}</p>
      <PriorityHighRoundedIcon color='action'/>
    </div>
  );
};

export default ConcernRow; 
