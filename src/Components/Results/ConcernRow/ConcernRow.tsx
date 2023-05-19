import './ConcernRow.css'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

interface ConcernRowProps {
  id: number
  title: string
  ranking: number
  icon?: React.ReactNode
  selectConcern: React.Dispatch<React.SetStateAction<number>>
}

const ConcernRow = ({id, title, ranking, icon, selectConcern}: ConcernRowProps) => {
  const getIcon = (): React.ReactNode => {  
    if(ranking <= 4) {
      return <PriorityHighRoundedIcon sx={{ color: '#D7263D' }}/>
    }else if(ranking <= 7) {
      return <div></div>
    }else {
      return <ThumbUpAltRoundedIcon sx={{ color: '#358600' }}/>
    }
  }

  return (
    <div className='concern-row' onClick={() => selectConcern(id)}>
      <p className='concern-title'>{title}</p>
      {getIcon()}
    </div>
  );
};

export default ConcernRow; 
