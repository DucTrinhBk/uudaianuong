import React, { Component } from 'react';
import { getUrl } from '../utils/DataConfig';
class Relation extends Component {
    getMinorPageGroups = (items)=>{
        let group; 
        let groups = [];
        for(let i = 1;i<items.length;i++){
            if(i%2 == 1){
                group = [];
                group.push(items[i]);
            }else{
                group.push(items[i]);
                groups.push(group);
            }
        }
        return groups;
    }
    render() {
        const data = this.props.data;
        const minorGroups = this.getMinorPageGroups(data); 
        return ( 
        <div className="mt-2 bg-white">
            <div className="col-md-12 bg-new">
                <h2 className="text-danger">Bài viết liên quan</h2>
            </div>
            {
                minorGroups.map((group,i)=>(
                    <div key={'lienquan-'+i} className="col-md-12 p-0">
                    {
                        group.map(
                            (item,j)=>(
                                <div key={'lienquan-item-'+item.Id} className="col-md-6 px-0">
                                    <div className="col-md-12 border-new p-2 mb-0 bg-content">
                                        <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                            <img src={getUrl(item.PhotoUrl)} className="img-responsive col-md-4" alt={item.TieuDe}/>
                                            <h3 className="mb-0">{item.TieuDe}</h3>
                                            <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                        </a>
                                    </div>
                                </div>
                                )
                )
                    }
                    </div>
                ))
            }
        </div>
     );
    }
}
 
export default Relation;