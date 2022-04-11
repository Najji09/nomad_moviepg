import styles from './selection.module.css';

const place = [
  '인천/김포',
  '부산',
  '대구',
  '청주',
  '광주',
  '제주',
  '양양',
  '광원',
];

const Option = ({ location }) => {
  return location.map((value) => {
    return (
      <option value={value} key={value}>
        {value}
      </option>
    );
  });
};

const Selection = () => {
  const onSelect = (e) => {
    console.log(e.target.value);
    return e.target.value + '출발';
  };
  return (
    <div className={styles.select}>
      <select name="from" onChange={onSelect}>
        <Option location={place} />
      </select>
      <div>출발</div>
    </div>
  );
};

export default Selection;
