document.addEventListener("DOMContentLoaded", function () {
	// Chat
	const assistantBtn = document.getElementById("assistantBtn");
	const chatPanel = document.getElementById("chatPanel");
	const closeChat = document.getElementById("closeChat");
	const sendBtn = document.getElementById("sendBtn");
	const chatInput = document.getElementById("chatInput");
	const chatBody = document.getElementById("chatBody");

	if (assistantBtn) {
		assistantBtn.addEventListener("click", function () {
			chatPanel.classList.add("active");
		});
	}

	if (closeChat) {
		closeChat.addEventListener("click", function () {
			chatPanel.classList.remove("active");
		});
	}

	if (sendBtn && chatInput) {
		sendBtn.addEventListener("click", sendMessage);

		chatInput.addEventListener("keypress", function (e) {
			if (e.key === "Enter") {
				sendMessage();
			}
		});
	}

	function sendMessage() {
		const message = chatInput.value.trim();
		if (message === "") return;

		const userDiv = document.createElement("div");
		userDiv.classList.add("user-message");
		userDiv.textContent = message;
		chatBody.appendChild(userDiv);

		chatInput.value = "";

		setTimeout(function () {
			const botDiv = document.createElement("div");
			botDiv.classList.add("bot-message");
			botDiv.textContent = "Thank you! Our AI will assist you shortly.";
			chatBody.appendChild(botDiv);
			chatBody.scrollTop = chatBody.scrollHeight;
		}, 800);
	}

	// Checklist
	const checkboxes = document.querySelectorAll("#checklist input");
	const progressBar = document.getElementById("progressBar");
	const progressText = document.getElementById("progressText");

	checkboxes.forEach(function (box) {
		box.addEventListener("change", updateProgress);
	});

	function updateProgress() {
		const total = checkboxes.length;
		const checked = document.querySelectorAll(
			"#checklist input:checked",
		).length;
		const percentage = (checked / total) * 100;

		progressBar.style.width = percentage + "%";
		progressText.textContent = Math.round(percentage) + "% Completed";
	}

	// Notification
	const notificationBtn = document.getElementById("notificationBtn");
	const notificationPanel = document.getElementById("notificationPanel");
	const closeNotification = document.getElementById("closeNotification");

	if (notificationBtn) {
		notificationBtn.addEventListener("click", function () {
			notificationPanel.classList.add("active");
		});
	}

	if (closeNotification) {
		closeNotification.addEventListener("click", function () {
			notificationPanel.classList.remove("active");
		});
	}

	// Calendar
	const calendarBtn = document.getElementById("calendarBtn");
	const calendarModal = document.getElementById("calendarModal");
	const closeCalendar = document.getElementById("closeCalendar");
	const calendarEl = document.getElementById("calendar");

	let calendar;

	if (calendarEl) {
		calendar = new FullCalendar.Calendar(calendarEl, {
			initialView: "dayGridMonth",
			height: "auto",
			events: [
				{ title: "Fee Deadline", date: "2026-02-25" },
				{ title: "Orientation Day", date: "2026-03-01" },
			],
		});
	}

	if (calendarBtn) {
		calendarBtn.addEventListener("click", function () {
			calendarModal.classList.add("active");

			setTimeout(function () {
				if (calendar) {
					calendar.render();
				}
			}, 100);
		});
	}

	if (closeCalendar) {
		closeCalendar.addEventListener("click", function () {
			calendarModal.classList.remove("active");
		});
	}

	// Close calendar on outside click
	if (calendarModal) {
		calendarModal.addEventListener("click", function (e) {
			if (e.target === calendarModal) {
				calendarModal.classList.remove("active");
			}
		});
	}

	// Document upload
	const documentUpload = document.getElementById("documentUpload");
	const fileName = document.getElementById("fileName");

	if (documentUpload) {
		documentUpload.addEventListener("change", function () {
			if (documentUpload.files.length > 0) {
				fileName.textContent = documentUpload.files[0].name;
				document.querySelector(".upload-box").style.borderColor = "green";
			} else {
				fileName.textContent = "No file selected";
			}
		});
	}
});
