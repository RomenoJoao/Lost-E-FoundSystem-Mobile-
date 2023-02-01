

export  function Logado(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({
                token: 'angolainventa',
                user: {
                    name: 'Romeno',
                    email:'Romenodias29@gmail.com'
                },
            });
        }, 2000)
    })
}