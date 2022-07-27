import React from 'react';
import NumberFormat from 'react-number-format';
import '../css/components/StatsCard.css';

function StatsCard({stat}) {
  return (
    <div className="card">
        <span className="stat-icon" style={{background:stat.bgColor, color:stat.icColor}} >
           {stat.icon}
        </span>
        <p className="content">
            <span className="stat-title">{stat.name}</span><br/>
            <span className="stat-num">{
            <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={stat.stats}
                    prefix=""
                    decimalSeparator="."
                    displayType="text"
                    thousandSeparator={true}
                    allowNegative={true} />
            }
        </span>
        </p>
</div>
  );
}

export default StatsCard;
