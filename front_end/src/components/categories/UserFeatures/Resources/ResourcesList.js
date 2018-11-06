import React from 'react'
import ResourceCard from './ResourceCard'





const ResourcesList = (props) => {


 let filteredResources = props.resources.filter(resource => {

   return resource.wrestling_name.toLowerCase().includes(props.inputValue)
 });

  let mappedResources = filteredResources.map(resource => {

        return <ResourceCard matchId={resource.dmatch_id} addToOldItemsApi={props.addToOldItemsApi} removeResource={props.removeResource} resource={resource} key={resource.id} />

    })

  

  return (
    <div>{mappedResources}</div>
  )
}

export default ResourcesList
