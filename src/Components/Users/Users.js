import React from "react"
import userPhoto from "../../images.jpg"
import {Slide} from "react-slideshow-image"



const MyUsers =(props)=>{

    return (<div className=" slide1 objectUser">
        <div className="photoUsers">
            <img  src={props.photos.small !=null ? props.photos.small : userPhoto} className="userPhoto" />
        </div>
        <div>
            <div className="nameUsers">
                {props.name}
            </div>
            <div className="status-users">
                {props.status}
            </div>
        </div>
    </div>)
}







export const Users = (props) => {
    const proprietes={
        duration: 6000,
        transitionDuration:500,
        infinite:true,
        arrows:true,
    }

    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for (let i=1; i<=pageCount; i++){
        pages.push(i);
    }


    const SlideElement=props.users.map (uu=> <MyUsers
            status={uu.status}
        photos={uu.photos} name={uu.name}/>)

    return (<div className="users">
        <div className="SlideWrapper">
            <Slide  {...proprietes}>
                {SlideElement}
            </Slide>
        </div>


        <div className="users">

            <div className="NumberPage">
                {pages.map(p=><button className={props.currentPage===p  && "selectPage"}
                    onClick={()=> { props.onPageChanged(p)} }
                >{p}</button> )}
            </div>
                    <div className="">
            {props.users.map(u => <div className="objectUser" key={u.id}>
                    <div className="photoUsers">
                            <img  src={u.photos.large !=null ? u.photos.large : userPhoto} className="userPhoto" />
                            <hr/>
                    </div>
                        <div>
                            <div className="nameUsers">
                                {u.name}
                            </div>
                            <div className="status-users">
                                {u.status}
                            </div>
                        </div>
                            <div className="button-follow-unfollow-users">
                              {u.followed ?
                                  <button className="btn btn-primary btn-follow" onClick={()=>(props.follow(u.id))}> отписаться</button>
                                  :
                                  <button  className="btn btn-success btn-unfollow" onClick={()=>(props.unfollow(u.id))}> подписаться</button>
                              }
                            </div>
                <div>
                </div>
            </div>
            )}
                    </div>
        </div>

    </div>)

}


