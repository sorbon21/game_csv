module.exports=class Gamer{
    nick;// Ник
    email;// Почта
    created_at;// Дата регистрации
    status; //статус
    constructor(arr) {
        this.nick = arr[0];
        this.email = arr[1];
        this.created_at = arr[2];
        this.status = arr[3];
        if (this.created_at != NaN && this.created_at!=undefined){
            this.parseDate();
        }
    }
    parseDate(){
        try{
            let temp_date_array=this.created_at.split('.');
            if (temp_date_array.length==3)
            {
                let temp_yearandtime = temp_date_array[2].split(' ');
                if (temp_yearandtime.length==2){
                    let year=temp_yearandtime[0];
                    let day=temp_date_array[0];
                    let month=temp_date_array[1];
                    let hour=temp_yearandtime[1];
                    this.created_at=Date.parse(`${year}-${month}-${day} ${hour}`);

                }else {
                    this.created_at=NaN;
                }
            }else
                this.created_at=NaN;
        }catch (e) {
            console.log(e);
        }

    }

    validate(){
        if (!isNaN(this.created_at)&& ["On","Off"].includes(this.status) && this.nick.length>0 && this.nick.length<=60 && this.email.indexOf('@')>1 ){
            return  true;
        }
        return  false;
    }

    getObject(){
        return {nick:this.nick,email:this.email,created_at:this.created_at,status:this.status};
    }

}
