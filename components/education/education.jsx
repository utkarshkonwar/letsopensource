import React from "react";
import ProjectItem from "../projects/project-item";

const Education = (props) => {
    return (
        <div data-section id='projects' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>Projects</h2>
            <div className='grid grid-cols-2 gap-2'>
                {props.data.map(function(object, index){
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        stars={object.stars}
                        lib={object.framework}
                        description={object.description}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Education