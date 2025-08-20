import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            raise Exception("Either radius or diameter must be provided")
    
    @property
    def radius(self):
        return self._radius
    
    @property
    def diameter(self):
        return self._radius * 2
    
    def area(self):
        return math.pi * self._radius ** 2
    
    def __str__(self):
        return f"Circle(radius={self._radius}, diameter={self.diameter}, area={self.area():.2f})"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self._radius + other._radius)
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self._radius < other._radius
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self._radius == other._radius
        return NotImplemented


if __name__ == "__main__":
    # Create circles
    c1 = Circle(radius=5)
    c2 = Circle(diameter=8)
    c3 = Circle(radius=3)
    
    # Print attributes
    print(c1)  
    print(c2)  
    
    # Compute area
    print(f"Area of c1: {c1.area():.2f}")  
    
    # Add circles
    c4 = c1 + c2
    print(c4)  
    
    # Compare circles
    print(c1 < c2) 
    print(c1 == Circle(radius=5))  
    
    # Sort circles
    circles = [c1, c2, c3]
    sorted_circles = sorted(circles)
    print("Sorted circles:")
    for circle in sorted_circles:
        print(circle)