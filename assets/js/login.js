document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://techo-v2.cheatdev.online/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      // Save tokens properly
      localStorage.setItem("accessToken", data.accessToken);   // main token for requests
      localStorage.setItem("refreshToken", data.refreshToken); // for refreshing later

      // Save user info
      localStorage.setItem("userInfo", JSON.stringify(data.user));

      // Keep compatibility with old code
      localStorage.setItem("userToken", data.accessToken); // instead of undefined
      localStorage.setItem("userUuid", data.user.uuid);    // works fine

      // 🔥 Remove this since it's never provided by API
      // localStorage.setItem("authToken", data.token); ❌

      // Debugging
      console.log("Login successful!");
      console.log("Access Token:", data.accessToken);
      console.log("User UUID:", data.user.uuid);

      alert("Login Successfully");
      window.location.href = "../index.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});
