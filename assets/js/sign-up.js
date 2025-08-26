 document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      username: username,
      phoneNumber: "0123456789", // you can add an input field if needed
      address: {
        addressLine1: "Default Street",
        addressLine2: "",
        road: "",
        linkAddress: ""
      },
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      profile: "https://example.com/default-profile.png" // optional
    };

    try {
      const response = await fetch("https://techo-v2.cheatdev.online/api/v1/users/user-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      if (response.ok) {
        alert("Account created successfully!");
        window.location.href = "./log_in.html";
      } else {
        alert("Error: " + (data.message || "Signup failed"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  });