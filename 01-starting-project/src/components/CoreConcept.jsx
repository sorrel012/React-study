import '../assets/css/coreConcept.css';

export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
