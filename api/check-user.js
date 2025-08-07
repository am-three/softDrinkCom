// const { createClient } = require('@supabase/supabase-js');

// const supabase = createClient(
//     process.env.SUPABASE_URL,
//     process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// module.exports = async (req, res) => {

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//     if (req.method === 'OPTIONS') return res.status(200).end();

//     if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

//     const { email } = req.body;

//     if (!email) return res.status(400).json({ error: 'Email is required' });

//     try {

//         const { data, error } = await supabase.auth.admin.getUserByEmail(email);

//         if (error && error.message === "User not found") {
//             return res.status(200).json({ exists: false });
//         }

//         return res.status(200).json({ exists: !!data?.user });
//     } catch (err) {
//         console.error("API error:", err);
//         return res.status(500).json({ error: 'Server error' });
//     }
// };
