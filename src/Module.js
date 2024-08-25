import './module.css';

export default function Module({ title = 'Access', module, setModule, error }) {
  function handleDivClick() {
    setModule(false);
  }

  function handleH1Click(event) {
    event.stopPropagation();
    setModule(true);
  }

  let text;
  if (title == 'Access') {
    text = title;
  } else {
    text = `Pleas enter the  ${title}`;
  }

  if (error) {
    text = error;
  }

  return (
    <div onClick={handleDivClick} className="module">
      <h1 style={{ color: 'white' }} onClick={handleH1Click}>
        {text}
      </h1>
    </div>
  );
}
