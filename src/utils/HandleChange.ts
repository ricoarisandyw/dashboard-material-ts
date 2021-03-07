const handleChange = (event: React.ChangeEvent<HTMLInputElement>, current: any, setter: React.Dispatch<React.SetStateAction<any>>) => {
    setter({
        ...current,
        [event.target.name]: event.target.value
    })
}

export default handleChange