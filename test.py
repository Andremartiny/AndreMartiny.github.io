import matplotlib.pyplot as plt

# Define the original complex numbers
a = 0+0j
b = 2 + 3j
c = 2 + 1j

# Define the multiplier
multiplier = 1j

# Multiply each complex number by the multiplier
a_new = a * multiplier
b_new = b * multiplier
c_new = c * multiplier

# Extract the real and imaginary parts of the original and new complex numbers
x_values = [a.real, b.real, c.real, a.real]
y_values = [a.imag, b.imag, c.imag, a.imag]

x_values_new = [a_new.real, b_new.real, c_new.real, a_new.real]
y_values_new = [a_new.imag, b_new.imag, c_new.imag, a_new.imag]

# Plot the original triangle
plt.figure(figsize=(8, 8))  # Adjusting the figure size for better visibility
plt.plot(x_values, y_values, marker='o', linestyle='-', color='b', label='Original Triangle')

# Plot the new triangle after multiplication
plt.plot(x_values_new, y_values_new, marker='o', linestyle='--', color='r', label='New Triangle (Multiplied by 1+i)')

# Label the points of the original triangle
plt.text(a.real, a.imag, 'A', fontsize=12, ha='right')
plt.text(b.real, b.imag, 'B', fontsize=12, ha='right')
plt.text(c.real, c.imag, 'C', fontsize=12, ha='right')

# Label the points of the new triangle
plt.text(a_new.real, a_new.imag, 'A\'', fontsize=12, ha='right')
plt.text(b_new.real, b_new.imag, 'B\'', fontsize=12, ha='right')
plt.text(c_new.real, c_new.imag, 'C\'', fontsize=12, ha='right')

# Set the aspect ratio to be equal
plt.gca().set_aspect('equal', adjustable='box')

# Set the limits of the axes
plt.xlim(-6, 6)
plt.ylim(-6, 6)

# Set the grid and axes with the origin in the middle
plt.grid(True)
plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(0, color='black', linewidth=0.5)
plt.xlabel('Real Part')
plt.ylabel('Imaginary Part')
plt.title('Original and Transformed Triangles')

# Add a legend
plt.legend()

# Show the plot
plt.show()
