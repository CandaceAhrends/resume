import React, { useEffect, useState, Children } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Down from '/down.svg';
import CardContent from '@mui/material/CardContent';
import classNames from 'classnames';
import './styles.scss';

const DescriptionCard = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [header, setHeader] = useState(null);
  const [description, setDescription] = useState(null);
  useEffect(() => {
    const arrayChildren = Children.toArray(children);
    const [header, description] = React.Children.map(arrayChildren, (child) => {
      return child;
    });
    setHeader(header);
    setDescription(description);
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const cardClass = classNames({
    'expand-content': true,
    expanded,
  });
  return (
    <Card className="clickable" onClick={handleExpandClick}>
      {header}
      <CardActions disableSpacing>
        <div className={`expand-icon clickable ${expanded ? 'up' : ''}`}>
          <img src={Down} alt="arrow"></img>
        </div>
      </CardActions>
      <div className={cardClass}>
        <CardContent>{description}</CardContent>
      </div>
    </Card>
  );
};

export default DescriptionCard;
