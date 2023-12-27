const ToDoModel=require('../models/ToDoModel');

module.exports.getToDo=async (req,res)=>{
    const toDo=await ToDoModel.find();
    res.send(toDo);
}

module.exports.saveToDo=async (req,res)=>{
   const {text}=req.body;

   
    ToDoModel.create({text})
    .then((data)=>{
      console.log('data added succesfully...');
      console.log(data);
      res.status(200).send(data)
    })
   
}
    module.exports.updateToDo=async (req,res)=>{
        const {_id,text}=req.body;

        ToDoModel.findByIdAndUpdate(_id,{text})
        .then(()=>{
              res.send('updated successfully...');
        })
        .catch(()=>{
            res.send('error to updaate');
        })
    }

    
    module.exports.deleteToDo=async (req,res)=>{
         const {_id}=req.body;

         ToDoModel.findByIdAndDelete(_id)
         .then(()=>{
            res.send('deleted successfully...')
         })
         .catch(()=>{
            res.send("Error in deleting");
         })
 
    }

