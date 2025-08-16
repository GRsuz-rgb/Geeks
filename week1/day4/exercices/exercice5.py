#Exercise 5 : TheIncredibles Family
#Create a class called TheIncredibles. This class should inherit from the Family class:
#This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
from exercice4 import Family
class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

#2 Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
    def use_power(self, inc_membre):
        for member in self.members:
            if member.get('name') == inc_membre:
                if int(member.get('age')) >= 18:
                    return f"The power of {member.get('incredible_name')} : {member.get('power')}"
                else:
                    raise Exception(f"{member.get('name')} can't use his/her power, he/she is not over 18 yo ")


#3 Add a method called incredible_presentation which :
#Print a sentence like “*Here is our powerful family **”
#Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()
        for member in self.members:
            print(f"power : {member.get('power')} , incredible_name : {member.get('incredible_name')}")



#4 Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
#Call the incredible_presentation method.
#Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
#Call the incredible_presentation method again.

if __name__ == "__main__":

    Incredibles1 = TheIncredibles("Lantern")
    Incredibles1.born(name="Lucy" ,age="50", gender="Female", is_child=False, power="fly", incredible_name="LFly")
    Incredibles1.born(name="Pastuzo" ,age="55", gender="Male",  is_child=False, power="read minds", incredible_name="Patsu")
    Incredibles1.born(name="Paddington" ,age="12", gender="Male", is_child=True, power="speed", incredible_name="flash")
    Incredibles1.born(name="Jack" ,age="2", gender="Male", is_child=True, power="unknown", incredible_name="Baby Jack")

    print(f"The first family member's age is >= 18  : {Incredibles1.is_18("Lucy")} ==> {Incredibles1.use_power("Lucy")}")
    print(f"The seconde family member's age is >= 18 : {Incredibles1.is_18("Pastuzo")} ==> {Incredibles1.use_power("Pastuzo")}")
    print(f"The third family member's age is >= 18 : {Incredibles1.is_18("Paddington")} ==> {Incredibles1.use_power("Paddington")}")
    print(f"The forth family member's age is >= 18 : {Incredibles1.is_18("Jack")} ==> {Incredibles1.use_power("Jack")}")

    Incredibles1.incredible_presentation()