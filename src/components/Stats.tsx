import { Carousel } from "./Carousel"
import { Chart } from "react-google-charts"


export const Stats = () => {
    return (
        <section className='h-screen w-full flex flex-col justify-between items-center'>
            <h2 className='p-4 text-center text-xl'>But enough yapping, here&apos;s some stats about me:</h2>
            <Carousel>
                <div>
                    <Chart 
                        chartType='PieChart'
                        data={[['Company', 'Months'], ['AOL', 5], ['Fidelity', 29], ['Toast', 28]]}
                        chartWrapperParams={{className: 'fill-indigo-50 h-1/2'}}
                        options={{title: 'Work Experience'}}
                    />
                </div>
                <div>
                    <Chart
                        chartType='ColumnChart'
                        data={[['Technology', 'Months experience'], ['React', 28], ['Angular', 29], ['Java', 24], ['Typescript', 57]]}
                    />
                </div>
            </Carousel>
            <p className='text-slate-400'>
                This is just a placeholder until I build my own charts
            </p>
        </section>
    )
}