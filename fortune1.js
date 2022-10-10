const names = ["The chariot", "The emperor", "The empress", "The fool", "The hermit", "The Hierophant", "The High Priestress", "The lover", "The magician", "The strength", "Weel of fortune"]
const pic = ["https://media.discordapp.net/attachments/920846680147001414/1011623045229727754/The_chariot.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623053337296937/The_emperor.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623073755168768/The_empress.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623084442267758/The_fool.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623106714009641/The_hermit.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623127173836961/The_Hierophant.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623150255083530/The_High_Priestress.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623161659396187/The_lover.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623195125760041/The_magician.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623221629558794/The_strength.jpg", "https://media.discordapp.net/attachments/920846680147001414/1011623233398775872/Weel_of_fortune.jpg"]
const com = ["ความมุ่งมั่น ความมุทะลุ ในความสัมพันธ์ ที่สามารถควบคุมได้...","ความมั่นคง ความนิ่ง ความเป็นพ่อ ความพร้อมจะดูแลและปกป้องคนที่ตนรัก...การควบคุมและความเป็นเจ้าเข้าเจ้าของ...","''ความเป็นแม่สูง ดูแลอย่างดีสมบูรณ์ คนที่เข้ามารักเธอจะยอมเธอทั้งกายและใจ...''","ความมีอิสระการทำในสิ่งที่ตัวเองต้องการโดยไม่สนใจผลลัพธ์และอันตราย","การแยกตัวออกมาคนเดียว ออกจากสถานการณ์บางอย่าง เพื่อค้นหาคำตอบด้วยมุมมองที่กว้างขึ้น...","ข้อตกลง แนวคิด ความเชื่อที่วางร่วมกันในความสัมพันธ์...","ความไม่ชัดเจน ความซับซ้อนในความสัมพันธ์ เหมือนพระจันทร์ที่ส่องสว่าง และมืดลงในบางวัน...","โอกาส โชคชะตาที่เข้ามา ซึ่งเป็นทางเลือกที่ต้องเลือก...","คนที่มีความรู้ความสามารถเข้าใจทุกสิ่งอย่างในความสัมพันธ์...","ความเข้มแข็งในการควบคุมจิตใจ ผู้หญิงคนนึงทำให้ผู้ชายยอมสยบได้...","การเปลี่ยนแปลงของโชคชะตา ที่เหนือการควบคุมของเรา..."]
const num = Math.floor(Math.random() * 10)

window.onload = () => {
    document.getElementById("card").innerHTML = names[num]
    document.getElementById("pic").src = pic[num]
    document.getElementById("com").innerHTML = com[num]
}