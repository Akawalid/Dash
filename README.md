API:
    axios.put(adresse + /api/regestrations, participantToInsert) renvoie rien, elle prend en parametre un object de type
        {
            name: String, 
            last_name:String,
            email: String,
            telephone: String,
            company_name: String,
            level: Number
        } 
    axios.get(adresse + /api/send_emails) renvoie un objet
        {
            participants: Array[] of {
            _id: mongoose.Schema.Types.ObjectId,
            name: String, 
            last_name:String,
            email: String,
            telephone: String,
            company_name: String,
            level: Number
            }
        }