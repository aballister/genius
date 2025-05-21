<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// ❌ Інші методи, окрім POST — забороняємо
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (empty($data["name"]) || mb_strlen(trim($data["name"])) < 2) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Name is too short"]);
    exit;
}

if (empty($data["phone"]) || !preg_match('/^[0-9\s\-\+\(\)]{7,}$/', $data["phone"])) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid phone number"]);
    exit;
}

$name = htmlspecialchars(trim($data["name"]));
$phone = htmlspecialchars(trim($data["phone"]));
$comment = isset($data["comment"]) ? htmlspecialchars(trim($data["comment"])) : '';

$message = "Name: $name\r\nPhone: $phone\r\nComment: $comment";

$to = 'aid@skm.clinic';
$subject = 'Client message from website';
$headers = "From: no-reply@genius.com.ua/\r\n";
$headers .= "Reply-To: no-reply@genius.com.ua\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Mail sending failed"]);
}
?>
