import './App.css';
import Module from './Module';
import { useState } from 'react';

export default function Logn({ module, setModule }) {
  const data = {
    name: '',
    phone: '',
    Age: '',
    salary: 'less_than_500',
    employee: false,
  };

  const [loge, setLoge] = useState(data);

  let hasEmptyValue = false;
  let valueees = undefined;

  for (const key in loge) {
    if (loge[key] === '') {
      valueees = key;
      hasEmptyValue = true;
      break;
    }
  }
  let error = undefined;
  if (!(loge.Age <= 40 && loge.Age >= 18)) {
    error = `the age Don't right`;
  }

  function handelShow() {
    setModule(true);
  }

  return (
    <>
      <div className="parent">
        <h1>Requstaing a Long</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          {/* name */}
          <label> Name :</label>
          <input type="text" onChange={(event) => setLoge({ ...loge, name: event.target.value })} />
          {/* phone */}
          <label>phone Number :</label>
          <input type="number" onChange={(event) => setLoge({ ...loge, phone: event.target.value })} />
          {/* age */}
          <label>Age :</label>
          <input type="number" onChange={(event) => setLoge({ ...loge, Age: event.target.value })} />
          {/* Ary pu employee */}
          <label className="check">Ary pu employee ?</label>
          <input type="checkbox" onChange={(event) => setLoge({ ...loge, employee: event.target.checked })} />
          {/*salary*/}
          <label>salary :</label>
          <select
            defaultValue="less_than_500"
            onChange={(event) => {
              setLoge({ ...loge, salary: event.target.value });
            }}
          >
            <option>less than 500$</option> {/*  اريد ان يتم اختيار اول خيار بحسب العلامة selected وعند تغير ال selected الى option اخر يتم تغير */}
            <option>less than 1000$</option>
            <option>less than 10000$</option>
          </select>

          <input onClick={handelShow} id={hasEmptyValue ? 'sub' : ''} type="submit" disabled={hasEmptyValue} />
          {module && <Module module={module} setModule={setModule} title={valueees} error={error} />}
        </form>
      </div>
    </>
  );
}
