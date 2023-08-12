import React from 'react'
import Day1 from '../components/LooseWeight/Day1'
import Day2 from '../components/LooseWeight/Day2'
import Day3 from '../components/LooseWeight/Day3'
import Day4 from '../components/LooseWeight/Day4'
import Break from '../components/Break'

export default function LooseWeight() {
    const mealPlan = [
        {
            date: 'Mon',
            breakfast: 'Bữa sáng: 3 lòng trắng trứng + 1 Chuối',
            lunch: 'Bữa trưa: 1 chén cơm + 200gram thịt gà + Rau luộc + 1 quả cam',
            dinner: 'Bữa tối: 100gram thịt thăn + rau luộc + 2 bìa đậu phụ'
        },
        {
            date: 'Tue',
            breakfast: 'Bữa sáng: 100g ức gà + rau luộc + 1/2 quả táo ',
            lunch: 'Bữa trưa: 1 bát cơm + Cá kho + R au xào + 1/2 quả ổi ',
            dinner: 'Bữa tối: 1 khoai + Rau luộc + 100gthịt bò'
        },
        {
            date: 'Wed',
            breakfast: 'Bữa sáng: 2 lòng trắng trứng +1 lát bánh mì + 1 cốc sữa không đường',
            lunch: 'Bữa trưa: Salat rau + 2 lạng ức gà ',
            dinner: 'Bữa tối: 100g ức gà + 2 con tôm, rau '
        },
        {
            date: 'Thu',
            breakfast: 'Bữa sáng: Nửa củ khoai, 50g thịt thăn, rau xanh',
            lunch: 'Bữa trưa: 100g thịt bò. 1 lòng trăng trứng . Rau xanh',
            dinner: 'Bữa tối: 100gCá, rau, đậu phụ, 2 mui bưởi '
        },
        {
            date: 'Fri',
            breakfast: 'Bữa sáng: 2 lat banh mi den với100g thịt nac và rau ',
            lunch: 'Bữa trưa: 1 lòng trắng trứng, 200g  thịt gà và rau  .nửa bát cơm',
            dinner: 'Bữa tối: Nửa củ khoai, thịt thăn, rau,'
        },
        {
            date: 'Sat',
            breakfast: 'Bữa sáng: 100Thịt nac,nửa quả tao. 1 cốc sữa',
            lunch: 'Bữa trưa: 1 bát cơm.gà xào xả ớt.canh rau .nửa quả táo',
            dinner: 'Bữa tối: 100gThịt gà, rau, nua thanh đậu phụ '
        },
        {
            date: 'Sun',
            breakfast: 'Bữa sáng: 2 lòng trắng trưng. 1 quả chuối .1 cốc sữa ',
            lunch: 'Bữa trưa: 200gthịt bò, canh cua, rau .cơm trắng ',
            dinner: 'Bữa tối: 2 tôm, 100g thịt bò, rau'
        },
    ]
    return (
        <div>
            <div className=''>
                <div className='text-center'>
                    <h1 className='text-xl italic font-semibold'>Plan tập giảm cân</h1>
                    <h2>4 ngày/tuần</h2>
                    <p>(đánh dấu lịch tập giảm cân lại, sau <br/> 12 tuần thấy hiệu quả thì xuống plan ở dưới)</p>
                </div>
                <div className='my-5 text-center'>
                    <Day1/>
                    <Day2/>
                    <Break/>
                    <Day3/>
                    <Day4/>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='text-xl italic font-semibold'>Lịch tập cardio</h2>
                <p>
                    Tuần 1 - tuần 4: 3 buổi x 30 phút/buổi <br/>
                    Tuần 5 - tuần 8: 4 buổi x 30 phút/buổi <br/>
                    Tuần 9 - 12: 5 buổi x 30 phút/buổi 
                </p>
            </div>
            <div>
                <h2>Weekly meal plan (cái này thấy trên cùng 1 page nên là để tham khảo thoi)</h2>
                <div>
                    {mealPlan.map((plan, index) => {
                        return (
                            <div key={index}>
                                <h3 className='text-center'>{plan.date}</h3>
                                <p>{plan.breakfast}</p>
                                <p>{plan.lunch}</p>
                                <p>{plan.dinner}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}