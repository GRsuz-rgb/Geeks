#Create a class called Family and implement the following attributes:
#members: list of dictionaries
#last_name : (string)

class Family():
    def __init__(self, last_name):
        self.members = [] 
        self.last_name = last_name

#Implement the following methods:
#born:
    def born(self, **dic_member):
        self.members.append(dic_member)
        print(f"Congratulation {self.last_name} the new member : {dic_member.get('name')}")
    
#is_18:  
    def is_18(self, member_name):
        for member in self.members:
            if member.get('name') == member_name:
                if int(member.get('age', 0)) >= 18:
                    return  True
                else:
                    return False
                
#family_presentation:     
    def family_presentation(self):
        print(f"Family last name : {self.last_name}")
        for member in self.members:
            print(f"name : {member.get('name')} , age : {member.get('age')} , gender : {member.get('gender')} , is_child : {member.get('is_child')}")

            
#Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
if __name__ == "__main__":

    family1 = Family("Brown")
    family1.born(name="Lucy" ,age="50", gender="Female", is_child=False)
    family1.born(name="Pastuzo" ,age="55", gender="Male", is_child=False)
    family1.born(name="Paddington" ,age="12", gender="Male", is_child=True)


    print(f"The first family member's age is >= 18  : {family1.is_18("Lucy")}")
    print(f"The seconde family member's age is >= 18 : {family1.is_18("Pastuzo")}")
    print(f"The third family member's age is >= 18 : {family1.is_18("Paddington")}")


    family1.family_presentation()
