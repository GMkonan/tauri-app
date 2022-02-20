#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
}

#[tauri::command]
fn my_return_command() -> String {
  "Hello from Rust!".into()
}

fn main() {
  tauri::Builder::default()
    // This is where you pass in your commands
    .invoke_handler(tauri::generate_handler![my_custom_command, my_return_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
