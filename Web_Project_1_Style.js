var re_check=document.querySelector(".check");
const Target = {nav_state: (val) => {return val % 2 === 0 ? true : false;},
State_change: (state, one, two, thr,show) => {
if (state) {one.classList.replace("one","one_look");two.classList.add("two_look");thr.classList.replace("thr","thr_look");show.classList.remove("close");a.classList.add("full");} else{one.classList.replace("one_look","one");two.classList.remove("two_look");thr.classList.replace("thr_look","thr");show.classList.add("close");a.classList.remove("full");
}},
show_load_bar:()=>{let animation_load=document.querySelector(".say");animation_load.innerHTML="Loading";let load=setInterval(()=>{animation_load.innerHTML+=".";},330);
    setTimeout(() => {clearInterval(load);}, 990);
        animation_div.style.visibility="visible";
        animation_count++; 
    },
    img_change:()=>{
        let img_contain=["https://th.bing.com/th/id/OIP.pOzGNRoPlzHHIu2WCs4cyAHaEo?rs=1&pid=ImgDetMain","https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600","https://wallpaperaccess.com/full/3710245.jpg"];
        let img_con=document.querySelector(".img-container");
        if(move==img_contain.length)
        {
            move=0;
        }
        img_con.style=`
        background-image:url(${img_contain[move]});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
    transition: all 4.5s ease;
        `;
        move++;

    }
    ,sub_state:(send_count)=>{
        if(send_count==0)
        {
            return false;
        }
        else{
            return true;
        }
    }
};
const data_check={
    error_raise:(fir_span,data,color_change)=>{
        fir_span.innerHTML=data;
        color_change.style.borderColor="#ff4b4b";
        all_fill=0;
        color_change.style.backgroundColor="#1a1919";
        color_change.style.color="white";
    
    },
    success:(fir_span,color_change)=>{
        fir_span.innerHTML="";
        color_change.style.borderColor="rgb(104 255 89)";
        color_change.style.backgroundColor="white";
        color_change.style.color="black";
        all_fill=1;
        
    },
    check_pass_pal:(input)=>{
        let str="";
        for(var i=input.length-1;i>-1;i--)
        {
            str+=input[i];
        }
        return str==input?true:false;
    },
        first_name:()=>{
            let fir_name=document.querySelector("#first");
            let fir_span=document.querySelector("#fn");
            if(fir_name.value=="")
            {
                data_check.error_raise(fir_span,"Plz Enter the data ..",fir_name);
            }
            else{
            data_check.success(fir_span,fir_name);
            fir_name.style.textTransform="capitalize";
            return true;
            }
        }
        ,
        last_name:()=>{
            let fir_name=document.querySelector("#Last");
            let fir_span=document.querySelector("#ln");
            if(fir_name.value=="")
            {
                data_check.error_raise(fir_span,"Plz Enter the data",fir_name);
            }
            else{
            data_check.success(fir_span,fir_name);
            fir_name.style.textTransform="capitalize";
            return true;
            }
        }
        ,
        check:(user_input)=>{
            let i=0;
            let data=user_input.value;
            for(i=0;i<data.length;i++)
            {
                
                if(['@','#','!','~','^','$','-','.'].includes((data[i])))
                {
                    return true;
                }
                
                }    return false;
        },
        user_name:()=>{
            let user_input=document.querySelector("#user");
            let user_span=document.querySelector("#user_span");
            
            if((user_input.value).length<6)
            {
                data_check.error_raise(user_span,"Username need atleast 6 char",user_input);
            }
            else if(data_check.check(user_input))
            {
                user_span.style.fontSize="medium";
                data_check.error_raise(user_span,"It mustn't have special chars except '_'",user_input); 
            }
            else{
                data_check.success(user_span,user_input);
                return true;
                
            }
        },
        pass:()=>{
            let pass_data=document.querySelector("#pass0");
            let pass_span=document.querySelector(".pass");
            let pass_value=document.querySelector(".icon");
            pass_value.style.color="white";
            if((pass_data.value).length<7)
            {
                
                pass_span.style.fontSize="medium";
                data_check.error_raise(pass_span,"The size of password must be larger than 7",pass_data);
            }
            else if(data_check.check_pass_pal(pass_data.value))
            {
                data_check.error_raise(pass_span,"Password not be a 'Palindrome'",pass_data);
           
            }
            else{
                data_check.success(pass_span,pass_data);
              
            pass_value.style.color="black";
                return true;
            }
        }
        ,
        grad:()=>{
            let a=document.querySelector("#grad");
            let grad_span=document.querySelector(".grad");
            if(a.value=="")
            {
                data_check.error_raise(grad_span,"Enter the details..",a);
            }
            else{
                data_check.success(grad_span,a);
                return true;
            }
        },
        clg:()=>{
            let a=document.querySelector("#college");
            let clg_span=document.querySelector(".clg");
            if(a.value=="")
            {
                data_check.error_raise(clg_span,"Enter the details..",a);
            }
            else{
                data_check.success(clg_span,a);
                return true;
            }
        },
        call_all()
        {
            data_check.first_name();
            data_check.last_name();
            data_check.user_name();
            data_check.pass();
            data_check.grad();
            data_check.clg();
        },
        con_sttisfy:()=>{
            if(data_check.first_name()&&
        data_check.last_name()&&
        data_check.user_name()&&
        data_check.pass()&&
        data_check.grad()&&
        data_check.clg())
        {
            return true;
        }
    }
};
var animation_div=document.querySelector(".initial");
var a=document.querySelector("nav");
var count = 1,move=0;
var all_fill=100;
var animation_count=1;
let nav_bt = document.querySelector("nav button");
let nav_bt1 = document.querySelector("nav button .one");
let nav_bt2 = document.querySelector("nav button .two");
let nav_bt3 = document.querySelector("nav button .thr");
let show=document.querySelector(".nav-bar")
show.classList.add("close");
var sub=document.querySelector(".send");
var is_send_click=0;
sub.addEventListener("click",
()=>
{
    is_send_click++;
    let stte=data_check.con_sttisfy();
    if(stte)
    {
        
        start();
       let std= setTimeout(()=>{
           let nxt=document.querySelector(".check");
           nxt.style.visibility="visible"; 
           let cls_bt=document.querySelector(".cls");
           
           cls_bt.addEventListener("click",(std)=>{
            let val=0;
            let st=Target.nav_state(val);
           if(st)
           {
            nxt.style.visibility="hidden";
            clearTimeout(std);
           }
           else{
            nxt.style.visibility="visible";

           }
           val++;
           })
           
        },6000)
    }
    
}  
    
)
function check_b()
{
    let stte=data_check.con_sttisfy();
if(stte)
    {
     sub.classList.add("cursor-class");   
    }
    else{
        sub.classList.remove("cursor-class");
    }
}
nav_bt.addEventListener("click", () => {
    var bt_state = Target.nav_state(count);
    Target.State_change(bt_state, nav_bt1, nav_bt2, nav_bt3,show);
    count++;
    if(bt_state)
    {
      
        let a_click=document.querySelectorAll(".nav-bar ul li a");
        a_click.forEach(function is_click(xyz) {
            xyz.addEventListener("click",()=>{
                bt_state=false;
                Target.State_change(bt_state, nav_bt1, nav_bt2, nav_bt3,show);
                count++;
            })
        });
      
        
    }
});
var icon_state=document.querySelector(".icon");

icon_state.addEventListener("click",()=>{
    if(icon_state.innerHTML=="visibility")
    {
        icon_state.innerHTML="lock";
        pass_show.setAttribute("type","text");
    }
    else{
        icon_state.innerHTML="visibility";
        pass_show.setAttribute("type","password");
        
    }

})
let final_create=document.querySelector(".checkit");
final_create.addEventListener("click",()=>{
    let actual=document.querySelector("#pass0");
    let real=document.querySelector(".check input");
    let real_sp=document.querySelector(".real-span");
    real_sp.classList.add("last-check");
    if(real.value===actual.value){
        real.style.border="1px solid black";
        data_check.success(real_sp,real);
        start();
        setTimeout(()=>{
            let bd=document.querySelector("body");
            let user=document.querySelector("#user");
            bd.innerHTML=`${user.value}@hacker.in Account Created!`;
        },5000)
    }
    else{
        real.style.border="1px solid red";
        data_check.error_raise(real_sp,"Incorrect Password",real);
    }
})
var pass_show=document.querySelector("#pass0");
pass_show.addEventListener("click",()=>{
    setInterval(()=>{
    let pas_state=document.querySelector(".icon");
    let pass_value=document.querySelector("#pass0");
   
    if(pass_value.value=="")
    {
        pas_state.style.visibility="hidden";
        pas_state.innerHTML="visibility";
    }
    else{
        pas_state.style.visibility ="visible";
    }
},10);
})

function start()
{
    let anima;
anima = setInterval(Target.show_load_bar, 1000);
setTimeout(() => {
    clearInterval(anima);
    animation_div.style.visibility="hidden";
}, 6000);

    
}
window.onload=start;
setInterval(Target.img_change,5000);
let clr_check=setInterval(check_b,10);
if(is_send_click>0)
{
setInterval(
    data_check.call_all,1000);
}

