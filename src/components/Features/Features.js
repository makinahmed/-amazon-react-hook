import React from 'react';

const Features = (props) => {
    console.log()
    return (
        <div>
            <p>Features :</p>
            <ul>


                {
                    props.features.map(feature =><li>{feature.description}</li>)
                }



            </ul>
        </div>
    );
};

export default Features;