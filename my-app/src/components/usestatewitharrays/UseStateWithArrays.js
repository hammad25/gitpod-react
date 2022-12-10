import React, {useState} from 'react'


function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {
        // use spread,map, filter
        setNums([...nums, nums.length + 1]);
    }
    const removeNums = () => {
        // in filter methods returns false for an item it is left out of the result
        setNums(nums.filter((item, index) =>  index < nums.length - 1 ))
    }

    // const buggyPush = () => {
    //     nums.push(nums.length + 1);
    //     setNums(nums);
    //     console.log(nums);
    // }

  return (
    <div>
        <button onClick={addNums}>Add Item</button>
        <button onClick={removeNums}>Remove Item</button>
        {/* <button onClick={buggyPush}>Buggy Push Item</button> */}


        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays