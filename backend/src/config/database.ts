import { connect } from 'mongoose'

const url = 'mongodb+srv://dbuser:dbuser@cluster0.xthth.gcp.mongodb.net/testeprobono?retryWrites=true&w=majority';
const conn = connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

export default conn;