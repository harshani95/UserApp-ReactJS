import './App.css';

const users = [{
  avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWO3KbPP62fL0ss5-XHZZuxeAQdjeax0JXTEXX0YF9Q1IHzd271RcFrICSULVh-OLwe30&usqp=CAU',
  name:'Saman Pradeep',
  designation:'Java Developer',
  salary:'30000',
  code:1
},

 {
  avatar:'https://thumbs.dreamstime.com/b/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg',
  name:'Kalum Perera',
  designation:'React Developer',
  salary:'35000',
     code:2
 },

 {
  avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDh6jDA5sU1nRmVNXZsKMmZvoAEBCkcZi65g&usqp=CAU',
  name:'Nimali Pranandu',
  designation:'Angular Developer',
  salary:'40000',
     code:3
 },

 {
  avatar:'https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-690.jpg?w=360',
  name:'Danuli Silva',
  designation:'PHP Developer',
  salary:'30000',
     code:4
 }]

function UserManager() {  
    return(    
      <div className='wrapper'>        
        {users.map((selectedUser,index)=>
        {                
        const {avatar, name, designation, salary, code} = selectedUser;
            return <User avatar={avatar} name={name} designation={designation} salary={salary} key={index}/>;
           })}    
      </div>  
        );
      }

// function UserManager() {  
//   return(   
//     <div className='wrapper'>  
//         <User avatar={user1.avatar} 
//               name={user1.name} designation={user1.designation} salary={user1.salary}/>    
//         <User  avatar={user2.avatar} 
//               name={user2.name} designation={user2.designation} salary={user2.salary}/>  
//         <User  avatar={user3.avatar} 
//               name={user3.name} designation={user3.designation} salary={user3.salary}/>  
//         <User  avatar={user4.avatar} 
//               name={user4.name} designation={user4.designation} salary={user4.salary}/>       
//     </div>    
//     );
//   }
                                
const User = (props)=>{   
  const {avatar, name, designation, salary} = props;
  return(     
    <div className='user-outer'>        
        <Avatar avatar = {avatar}/>        
        <UserData name = {name} designation = {designation} salary = {salary}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. 
        </UserData>    
    </div>    
    )
  }
                          
const Avatar = ({avatar})=>{   
  return(      
    <div className='avatar-outer'>     

    <img src={avatar}
    alt='profile'/>
      </div>    
      )
  }
                                                            
  const UserData = ({name, designation, salary, children})=>{  
    return(       
      <div className='user-data'> 
        <UserName name = {name}/>       
        <Designation designation = {designation}/> 
        <Salary salary = {salary}/>
        <p>{children}</p>    
      </div>  
    )
  }
            
  const UserName = ({name})=>{  
    return(   
      <h2 style={{color:'rgb(10, 61, 98)'}}>{name}</h2>   
    )}
  
  const Designation = ({designation})=>{   
    return(     
      <h3 style={{fontStyle:'italic'}}>{designation}</h3>  
    )
  }
                                                                                                                       
  const Salary = ({salary})=>{   
    return(        
      <h2 style={{fontStyle:'italic'}}>{salary}</h2>    
    )
  }
                                                                                                                         
  export default UserManager;
