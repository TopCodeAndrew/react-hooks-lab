import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fact from './Fact'

const List = () => {
    const [facts, updateFacts] = useState([])
    const url = 'https://cat-fact.herokuapp.com/facts'

    useEffect(() => {
        axios
            .get(`${url}`)
            .then((res) => {
                updateFacts([...res.data])
            })
    }, [])

    const mappedFacts = facts.map((e, i) => {
        console.log(facts);
        return (
            <Fact text={e.text} key={i} />
        )
    })

    return (
        <div>{mappedFacts}</div>
    )
}


export default List