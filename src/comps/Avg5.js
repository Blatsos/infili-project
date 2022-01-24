const Avg5 = (props) => {
  const bitArr = props.values;
  let content = 0;
  let sum = 0;
  for (
    let i = bitArr.length - 5 >= 0 ? bitArr.length - 5 : 0;
    i <= bitArr.length - 1;
    i++
  ) {
    let int = parseInt(bitArr[i], 10);
    content += int;
  }
  if (bitArr.length >= 5) {
    sum = content / 5;
  }

  return (
    <div>
      <h3>AVG last 5 minutes: {sum}</h3>
    </div>
  );
};

export default Avg5;
