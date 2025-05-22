"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际应用中，这里会发送数据到后端
    // 现在我们只是模拟表单提交
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // 为了演示，重置表单数据
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    
    // 5秒后重置提交状态
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <MainLayout>
      {/* 标题区域 */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.h1 
            className="heading-xl max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            联系我们
          </motion.h1>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h2 className="heading-lg mb-8">与我们取得联系</h2>
              <p className="paragraph mb-12">
                如果您有任何问题或想了解更多关于我们的项目，请随时与我们联系。
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">电话</h3>
                  <p className="text-sm">+39 346 3591443</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">地址</h3>
                  <p className="text-sm">via Fratelli Rosselli 41,<br />Lastra a Signa, Florence.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">邮箱</h3>
                  <p className="text-sm">info@mirkoromanelli.com</p>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {isSubmitted ? (
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-4">感谢您的留言！</h3>
                  <p className="text-green-700">
                    感谢您填写联系表单并与我们联系。我们非常感谢您的关注，并期待探索合作的机会。我们将很快回复您。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      placeholder="姓名"
                      className="w-full"
                    />
                    <label htmlFor="name">姓名</label>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      placeholder="电子邮箱"
                      className="w-full"
                    />
                    <label htmlFor="email">电子邮箱</label>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => handleFocus('company')}
                      onBlur={handleBlur}
                      placeholder="公司（选填）"
                      className="w-full"
                    />
                    <label htmlFor="company">公司（选填）</label>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows={5}
                      required
                      placeholder="项目详情"
                      className="w-full resize-none"
                    ></textarea>
                    <label htmlFor="message">项目详情</label>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="form-submit-btn"
                    >
                      发送信息
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
} 