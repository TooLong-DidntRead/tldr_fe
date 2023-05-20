import React, {KeyboardEvent} from 'react';
import './ConcernRow.css'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';

interface ConcernRowProps {
  id: number;
  title: string;
  ranking: number;
  icon?: React.ReactNode;
  selectConcern: React.Dispatch<React.SetStateAction<number>>;
}

const ConcernRow = ({id, title, ranking, selectConcern}: ConcernRowProps) => {
  const getIcon = (): React.ReactNode => {  
    if(ranking <= 4) {
      return <PriorityHighRoundedIcon sx={{ color: '#D7263D' }}/>
    }else if(ranking <= 7) {
      return <SentimentNeutralIcon sx={{ color: '#ffa62b' }}/>
    }else {
      return <ThumbUpAltRoundedIcon sx={{ color: '#358600' }}/>
    }
  }

  const handleKeyPress = (event:KeyboardEvent, id:number): void => {
    if (event.key === "Enter") {
      selectConcern(id);
    };
  };

  return (
    <div className='concern-row' onClick={() => selectConcern(id)} onKeyDown={(event)=>{handleKeyPress(event, id)}}tabIndex={0}>
      <p className='concern-title'>{title}</p>
      {getIcon()}
    </div>
  );
};

export default ConcernRow; 
