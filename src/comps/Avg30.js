const Avg30 = (props) => {
  const bitArr = props.values;
  let content = 0;
  let sum = 0;
  for (
    let i = bitArr.length - 30 >= 0 ? bitArr.length - 30 : 0;
    i <= bitArr.length - 1;
    i++
  ) {
    let int = parseInt(bitArr[i], 10);
    content += int;
  }

  if (bitArr.length >= 30) {
    sum = content / 30;
  }

  return (
    <div>
      <h3>AVG last 30 minutes: {sum}</h3>
    </div>
  );
};

export default Avg30;
