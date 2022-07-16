import './BreakingDetails.css';

interface ContainerProps {
  details: any;
}

const BreakingDetails: React.FC<ContainerProps> = ({ details }) => {
  console.log(details);
  return (
    <div className="container">
      <div className="image-container">
        <img className="image" src={details.img} />
      </div>
      <div className="details-container">
        <div className="content">
          <label>
            Name: 
          </label>
          <span className="singleContent">
            {details.name}
          </span>
        </div>
        <div className="content">
          <label>
            Occupation: 
          </label>
          <div className="multiContent">
            {details.occupation.map((item: any, idx: number) => (
              <span className="item" key={idx}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="content">
          <label>
            Status: 
          </label>
          <span className="singleContent">
            {details.status}
          </span>
        </div>
        <div className="content">
          <label>
            Nickname: 
          </label>
          <span className="singleContent">
            {details.nickname}
          </span>
        </div>
        <div className="content">
          <label>
            Season appearance: 
          </label>
          <div className="multiContent">
            {details.appearance.map((item: any, idx: number) => (
              <span className="item" key={idx}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingDetails;
