import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface IconCardProps {
  name: string;
}

const IconCard: React.FC<IconCardProps> = ({ name }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch(`/icons/${name}.svg`)
      .then(response => response.text())
      .then(data => setSvgContent(data));
  }, [name]);

  return (
    <div>
      <Link to={`/icon/${name}`}>
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default IconCard;
