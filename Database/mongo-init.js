db = db.getSiblingDB('Project')

//populate with some users
db.users.insert({mail:"pl@123", pwd:"123"}); 
db.users.insert({mail:"artemi@123", pwd:"123"});
db.users.insert({mail:"CarmenSandiego@redHat.fr", pwd:"123"}); 
db.users.insert({mail:"Neill@Blomkamp.za", pwd:"123"});

//populate with some metrics
db.metrics.insert({user_id:"pl@123", debt_to:"Artemii", amount: "50"}); 
db.metrics.insert({user_id:"artemi@123", debt_to:"Sergei", amount: "-200"}); 
db.metrics.insert({user_id:"pl@123", debt_to:"Summer Cthulhu club", amount: "-500"}); 
db.metrics.insert({user_id:"artemi@123", debt_to:"Warhammer inc", amount: "-100"}); 
