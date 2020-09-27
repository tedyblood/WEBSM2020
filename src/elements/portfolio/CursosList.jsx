import React, { Component } from "react";
import consulta_API from "../../services/consulta_API";

import ConsultaAPi from "../../services/consulta_API";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <>
            <ConsultaAPi></ConsultaAPi>            
            </>
            // <React.Fragment> 
            //     {list.map((value , index) => (
            //         <div className={`${column}`} key={index}>
            //             <div className={`portfolio ${styevariation}`}>
            //                 <div className="thumbnail-inner">
            //                     <div className={`thumbnail ${value.image}`}></div>
            //                     <div className={`bg-blr-image ${value.image}`}></div>
            //                 </div>
            //                 <div className="content">
            //                     <div className="inner">
            //                         <p>{value.category}</p>
            //                         <h4><a href="/portfolio-details">{value.title}</a></h4>
            //                         <div className="portfolio-button">
            //                             <a className="rn-btn" href="/portfolio-details">View Details</a>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     ))}
               
            // </React.Fragment>
        )
    }
}
export default PortfolioList;