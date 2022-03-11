function PlantForm(props) {
    console.log(props);
    let plantForm = {
        name: '',
        family: '',
        shade: false,
        sun: false,
        img: ''
    };

    return ( 
        <article>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e) => (plantForm.name = e.target.value)}></input>
            <label htmlFor="family">Family:</label>
            <input type="text" id="family" onChange={(e) => (plantForm.family = e.target.value)}></input>
            <label htmlFor="sun">Sunny:</label>
            <input type="checkbox" id="sun" onChange={(e) => (plantForm.sun = e.target.checked)}></input>
            <input type="button" value="Add" onClick={() => (props.updatePlants(plantForm))}></input>
        </article>
     );
}

export default PlantForm;