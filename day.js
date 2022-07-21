const Day = () => {
    const options = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' },
      ];
    
      const [value, setValue] = React.useState('going to be a great day');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
      return (
        <div>
          <label>
            Today is:  
            <select value={value} onChange={handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
    
          <p>Let's get it done! It's {value}!</p>
        </div>
    );
};
  