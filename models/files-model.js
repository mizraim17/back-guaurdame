const mongoose =  require ('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  date:Date,
  history_med:String,
  anamnesis:String,
  MM:	String,	FC:	String,	TLLC:	String,	RD:	String, RT:	String,	FR:	String, Mucosas:	String,	Temperature:	String,
  PP:	String,	Pulso:	String,	PA:	String,	EM:	String, CC:	String,	Linfonodos:	String, lab_QS:String,lab_HG:String,
  lab_U:String,lab_Rx: String, lab_dxp:String
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const File = mongoose.model('File',fileSchema)

module.exports=File;